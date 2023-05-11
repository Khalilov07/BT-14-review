import React from 'react';

const UserCard = ({ name, age, email }) => {
    return (
        <>
            <div className="user">
                <div className="user-info">
                    <p>user-name: {name}</p>
                    <p>age: {age}</p>
                    <p>email: {email}</p>
                </div>
                <div className="user-photo">
                    <img src="data:image/jpeg;base64,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" alt="" />
                </div>
            </div>
        </>
    );
};

export default UserCard;