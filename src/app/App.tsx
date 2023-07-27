import 'app/styles/index.scss'
import { useTheme } from 'app/provider/ThemeProvider';
import { classNames } from 'shared/lib/classNames/classNames';
import {AppRouter} from "app/provider/router";
import {Navbar }from "widgets/Navbar";


const App = () => {
    const {theme, toggleTheme} = useTheme()

    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar/>
            <AppRouter/>
            <button onClick={toggleTheme}>Toggle</button>
        </div>
    );
};

export default App;