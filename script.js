// AI Explorer v1.0
// Language Switch & Interaction


function changeLanguage(language){


    const title =
    document.getElementById("title");


    const intro =
    document.getElementById("intro");


    const aboutText =
    document.getElementById("aboutText");


    const thought =
    document.getElementById("thought");



    if(language === "zh"){


        title.innerHTML =
        "新时代 AI 学习者";


        intro.innerHTML =
        `
        探索人工智能，<br>
        探索未来世界。
        `;


        aboutText.innerHTML =
        `
        我不是程序员，<br>
        也没有写过一行代码。
        <br><br>
        但是我相信：<br>
        AI时代属于所有愿意学习、
        探索和成长的人。
        `;


        thought.innerHTML =
        `
        在人工智能快速发展的时代，
        <br>
        保持好奇心，
        持续学习，
        <br>
        也许就是普通人与未来连接的方式。
        `;


    }



    else{


        title.innerHTML =
        "A New Generation AI Learner";


        intro.innerHTML =
        `
        Exploring Artificial Intelligence,
        <br>
        Exploring The Future.
        `;


        aboutText.innerHTML =
        `
        I am not a programmer.
        <br>
        I have never written a line of code.
        <br><br>
        But I believe:
        <br>
        The AI era belongs to everyone
        who is willing to learn,
        explore and grow.
        `;



        thought.innerHTML =
        `
        In the rapidly developing AI era,
        <br>
        curiosity and continuous learning
        <br>
        may be the bridge between ordinary people
        and the future.
        `;


    }


}





// Scroll button


function scrollToAbout(){


document
.getElementById("about")
.scrollIntoView({

behavior:"smooth"

});


}
