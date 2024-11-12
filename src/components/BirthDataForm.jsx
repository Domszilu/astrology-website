import React, { useState, useContext } from "react";
import { BirthContext } from "../context/BirthContext";
import { useNavigate } from "react-router-dom";
import { BigStyledButton, StyledButton } from "./styles/Button.styles";
import {
  generateDays,
  generateHours,
  generateMinutes,
  generateMonths,
  generateYears,
} from "../utils/FormLogic";
import {
  MainContainer,
  FormContainer,
  Header,
  SelectGroup,
  FormSelect,
  ButtonContainer,
} from "./styles/BirthDataForm.styles";

function BirthDataForm() {
  const { fetchData } = useContext(BirthContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    day: "",
    month: "",
    year: "",
    hour: "",
    minute: "",
    location: "",
    longitude: 12.4963655,
    latitude: 41.9027835,
    timezone: "Europe/Rome",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    fetchData(e, formData);
    navigate("/result");
  };

  return (
    <MainContainer>
      <FormContainer>
        <Header>
          <h1>Enter your birth data</h1>
          <p>
            You can pull your astrology chart by filling in the requested
            information below.
          </p>
        </Header>
        <form onSubmit={handleSubmit}>
          <SelectGroup>
            <FormSelect
              name="hour"
              value={formData.hour}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Hour
              </option>
              {generateHours()}
            </FormSelect>
            <FormSelect
              name="minute"
              value={formData.minute}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Minute
              </option>
              {generateMinutes()}
            </FormSelect>
          </SelectGroup>
          <SelectGroup>
            <FormSelect
              name="day"
              value={formData.day}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Day
              </option>
              {generateDays()}
            </FormSelect>
            <FormSelect
              name="month"
              value={formData.month}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Month
              </option>
              {generateMonths()}
            </FormSelect>
            <FormSelect
              name="year"
              value={formData.year}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Year
              </option>
              {generateYears()}
            </FormSelect>
          </SelectGroup>
          <ButtonContainer>
            <StyledButton>Get your chart</StyledButton>
          </ButtonContainer>
        </form>
      </FormContainer>
    </MainContainer>
  );
}

export default BirthDataForm;
