import PropTypes from "prop-types";
//import cn from 'classnames';
import styles from './ChooseSide.module.css';
import { useTheme, THEME_LIGHT, THEME_DARK, THEME_NEITRAL } from "@context/ThemeProvaider";
import imgLightSide from './img/light-side.jpg';
import imgDarkSide from './img/dark-side.jpg';
import imgFalcon from './img/falcon.jpg';

const ChooseSideItem = ({
    theme,
    text,
    img,
                        }) => {
    const isTheme = useTheme();

        return (
    <div className={styles.item}
         onClick={() => isTheme.change(theme)}
    >
        <span className={styles.item__header}>{text}</span>
        <img className={styles.item__img} src={img} alt={text}/>
    </div>
    )
}

ChooseSideItem.propTypes = {
    theme: PropTypes.string,
    text: PropTypes.string,
    img: PropTypes.string,
}

const ChooseSide = () => (

    <>
        <ChooseSideItem
            theme={THEME_LIGHT}
            text='Light Side'
            img={imgLightSide}
        />
        <ChooseSideItem
            theme={THEME_DARK}
            text='Dark Side'
            img={imgDarkSide}
        />
        <ChooseSideItem
            theme={THEME_NEITRAL}
            text='Im Han Solo'
            img={imgFalcon}
        />
    </>
)


export default ChooseSide;