import PropTypes from "prop-types";
import styles from './InputSearch.module.css';
import cn from 'classnames';
import iconCross from './img/crossIcon.png';

const InputSearch = ({
        value,
        handleInputChange,
        placeholder,
        classes
 }) => (
        <div className={cn(styles.wrapper__input, classes)}>
            <input
                type="text"
                value={value}
                onChange={(e) => handleInputChange(e.target.value)}
                placeholder={placeholder}
                className={styles.input}
            />
            <img
                onClick={()=> value && handleInputChange('')}
                src={iconCross}
                alt="Icon Cross"
                className={cn(styles.clear, !value && styles.clear__disabled)}
            />


        </div>
    )


    InputSearch.propTypes = {
        value: PropTypes.string,
        handleInputChange: PropTypes.func,
        placeholder: PropTypes.string,
        classes: PropTypes.string,

    }

export default InputSearch;