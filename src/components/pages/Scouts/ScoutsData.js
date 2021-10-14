export const scoutObjOne = () => {
    const data =[
    {id: 1, 
        sailorName: "Sailor Moon", 
        firstName: "Usagi/Serena", 
        lastName: "Tsukino", 
        age: 14, 
        description: "Main protagonist and the Sailor Guardians' leader. She is the Guardian of love and justice.", 
        imgStart:'', 
        img: 'images/moon.jpeg', 
        alt: "Sailor Moon"},
    {id: 2, 
        sailorName: "Sailor Mercury", 
        firstName: "Ami/Amy", 
        lastName: "Mizuno/Anderson", 
        age: 14, 
        description: "Guardian of Water and Wisdom, with an IQ rumored to be 300. She is the practical guardian in the group.", 
        imgStart:'', 
        img: 'images/mercury.jpeg', 
        alt: "Sailor Mercury"},
    {id: 3, 
        sailorName: "Sailor Mars", 
        firstName: "Rei/Raye", 
        lastName: "Hino", 
        age: 14, 
        description: "Shrine maiden who is the Guardian of fire and passion. She has the power to dispel evil through the use of ofuda scrolls.  ", 
        imgStart:'', 
        img: 'images/mars.jpeg', 
        alt: "Sailor Mercury"},

    ];

    return (
        <div className="sailorscouts">
            {data.map((sailorscout) => (
                <div className="sailorscout">{sailorscout}</div>
            ))}
        </div>
    );
};




