import React, { createContext, useState } from "react";

export const BirthContext = createContext();

export const BirthProvider = ({ children }) => {
    const [birthData, setBirthData] = useState({});
    const [aspectData, setAspectData] = useState([]);

    const [error, setError] = useState(null);

    // FETCHING DATA
    const fetchData = async (e, formData) => {
        e.preventDefault();

        const url =
            "https://astrologer.p.rapidapi.com/api/v4/natal-aspects-data";

        const options = {
            method: "POST",
            headers: {
                "x-rapidapi-key": import.meta.env.VITE_ASTROLOGER_API,
                "x-rapidapi-host": "astrologer.p.rapidapi.com",
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                subject: {
                    name: "User",
                    year: formData.year,
                    month: formData.month,
                    day: formData.day,
                    hour: formData.hour,
                    minute: formData.minute,
                    longitude: formData.longitude,
                    latitude: formData.latitude,
                    city: formData.location,
                    nation: "IT",
                    timezone: formData.timezone,
                    zodiac_type: "Tropic",
                },
                chart: formData.chart,
            }),
        };

        try {
            const response = await fetch(url, options);
            const result = await response.json();
            // console.log(result);

            if (result && result.data && result.data.subject) {
                setBirthData(result.data);
                setAspectData(result.aspects);
            } else {
                setError("Failed to fetch data.");
            }
        } catch (error) {
            console.error("Error fetching data:", error);
            setError("An error occurred while fetching data.");
        }
    };

    return (
        <BirthContext.Provider
            value={{
                birthData,
                aspectData,
                setBirthData,
                fetchData,
            }}
        >
            {children}
        </BirthContext.Provider>
    );
};
