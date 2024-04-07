import React from 'react'

const Display= ({ formData }) => {
    return (
        <div>
            <h2>Form Data</h2>
            <div>
                <label>Name:</label>
                {formData.name}
            </div>
            <div>
                <label>Contact No:</label>
                {formData.contactNo}
            </div>
            <div>
                <label>Address:</label>
                {formData.address}
            </div>
            {formData.document && (
                <div>
                    <label>Birth certificate:</label>
                    {formData.document.name}
                </div>
            )}
            {formData.document && (
                <div>
                    <label>Marklist:</label>
                    {formData.document.name}
                </div>
            )}
        </div>
    );
}

export default Display