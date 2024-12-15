import React, { useState } from 'react';

function PhoneInput() {
    const [phoneNumber, setPhoneNumber] = useState('');

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target.value.replace(/\D/g, '').substring(0, 11);
        const formattedInput = `(${input.substring(0, 2)}) ${input.substring(2, 7)}-${input.substring(7, 11)}`;
        setPhoneNumber(formattedInput);
    };

    return (
        <input
            type="text"
            value={phoneNumber}
            onChange={handleInputChange}
            className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600"
        />
    );
}

export default PhoneInput;