import React, { useState } from 'react';
const Task = ({ db }) => {
    const calc = (string1, string2) => {
        var start = new Date(string1);
        var end = new Date(string2);
        var difference = (end - start) / 1000 / 60;
        return (difference);
    }
    const change = (date1) => {
        var mydate = new Date(date1);
        var month = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"][mydate.getMonth()];
        var str = mydate.getFullYear() + '/' + month + '/' + mydate.getDate() + ' ' + mydate.getHours() + ':' + mydate.getMinutes() + 'h';
        return (str);
    }

    return (
        <div>
            <h2>Task name: {db.name}</h2>
            <h3>Description: {db.desc}</h3>
            <h3>Start time: {change(db.start)}</h3>
            <h3>End time: {change(db.end)}</h3>
            <h3>Duration: {calc(db.start, db.end)} minutes</h3>
            <br />
        </div>
    )
}
const Taskinfo = ({ tasks }) => {
    return (
        <div>
            <h1>List of tasks</h1>
            {tasks.map(kk => (
                <Task db={kk} key={kk.id} />
            ))}
        </div>
    )
}

export default Taskinfo;