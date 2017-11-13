// @flow
import React from 'react';
import classNames from 'classnames';
import styles from './InputCheckbox.scss';
import InputLabelInline from '../InputLabelInline/InputLabelInline';
import InputWrapperInline from '../InputWrapperInline/InputWrapperInline';
import FocusBloop from '../FocusBloop';

const displayName = 'InputCheckbox';

type Props = {
    checkedStyle?: 'default' | 'indeterminate',
    className?: string,
    disabled?: boolean,
    errorMsg?: React$Element<*>,
    format?: 'negative' | 'positive' | 'neutral',
    helperMsg?: React$Element<*>,
    id: string,
    label: string | React$Element<*>,
    hideLabel?: boolean,
    theme?: 'default' | 'dark',
};

const InputCheckbox = ({
    checkedStyle = 'default',
    className,
    disabled,
    errorMsg,
    format = 'neutral',
    helperMsg,
    hideLabel,
    id,
    label,
    theme = 'default',
    ...filteredProps
}: Props): React$Element<*> => {

    // className builder
    const componentClass = classNames(
        styles.InputCheckbox,
        className
    );

    const overlayClass = classNames(
        styles.InputCheckboxOverlay,
        styles[checkedStyle],
        styles[theme + 'Theme'],
        className
    );

    const labelWrapperClass = classNames(
        (hideLabel ? styles.isHiddenLabel : null)
    );

    return (
        <InputWrapperInline
            errorMsg={errorMsg}
            helperMsg={helperMsg}
            theme={theme}
        >
            <div className={styles.InputCheckboxWrapper}>
                <InputLabelInline
                    htmlFor={id}
                    format={format}
                    disabled={disabled}
                    className={styles.InputCheckboxLabel}
                    fieldLevelErrors
                    hideLabel={hideLabel}
                    theme={theme}
                >
                    <input
                        {...filteredProps}
                        aria-label={hideLabel ? label : null}
                        type="checkbox"
                        id={id}
                        className={componentClass}
                        disabled={disabled}
                    />
                    <span className={overlayClass} />
                    <FocusBloop className={styles.FocusBloop} theme={theme}/>
                    <span className={labelWrapperClass}>{label}</span>
                </InputLabelInline>
            </div>
        </InputWrapperInline>
    );
};

InputCheckbox.displayName = displayName;

export default InputCheckbox;