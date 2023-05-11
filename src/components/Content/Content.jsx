import React from 'react';
import './content.css'
import UserCard from '../UserCard/UserCard';

const Content = () => {

    const userInfo = [
        {
            id : 1,
            name : "Akram",
            age : 18,
            email : "akram@mail.ru"
        },
        {
            id : 2,
            name : "Alihan",
            age : 14,
            email : "alihan@mail.ru"
        }
    ]

    return (
        <div className="content">
           <UserCard name={userInfo[0].name} age={userInfo[0].age} email={userInfo[0].email} />
           <UserCard name={userInfo[1].name} age={userInfo[1].age} email={userInfo[1].email} />
        </div>
    );
};

export default Content;