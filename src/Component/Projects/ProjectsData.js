
import Movie from './IMG/movie.png'
import Todo from './IMG/Todo.png'
import WeatherApp from './IMG/WeatherApp.png'

const ProjectsData = [
    {
        "id": 1,
        "projectName": "To-Do",
        "projectIMG": Todo,  
        "projectDetails": "Armed with an arsenal of technologies including HTML, CSS, JavaScript, React.js, and Bootstrap, I embark on journeys through code to create functional and stylish applications.",
        "usedLanguage": ["React", "CSS", "Bootstrap", "Firebase"],  // Array of languages
        "projectLink": "https://todo-list-523j.onrender.com/"
    },

    {
        "id": 2,
        "projectName": "Weather-App",
        "projectIMG": WeatherApp,
        "projectDetails": "This is a simple application that shows current weather conditions for any location. This project helped me improve my skills in managing state and making API calls with React.",
        "usedLanguage": ["React", "CSS", "Bootstrap"],
        "projectLink": "https://moviesinfos.netlify.app/"
    },

    {
        "id": 3,
        "projectName": "Movies Detail",
        "projectIMG": Movie,
        "projectDetails": "This is a simple website that shows movie details and also recommends popular, latest movies. This project helped me improve my skills in API calls with React.",
        "usedLanguage": ["React", "CSS"],
        "projectLink": "https://weather-16ms.onrender.com/"
    },
];

export default ProjectsData;
