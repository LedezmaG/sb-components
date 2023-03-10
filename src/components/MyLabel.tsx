import './MyLabel.css'

interface MyLabelProps {
    /**
   * Is this the main message 
   */
    label: string;
    /**
   * Is this the size of the text the defauld value is 'normal'
   */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Seleect the color
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * Trasform all the text to capital letters
     */
    allCaps: boolean;
    /**
     * Select the color
     */
    fontColor?: string
}

export const MyLabel = ({
    label = 'No label',
    size = 'normal',
    color = 'primary',
    allCaps = false,
    fontColor
}: MyLabelProps) => {
    return (
        <span className={`label ${size} text-${color}`} style={{color: fontColor}}>
            { allCaps ? label.toUpperCase() : label }
        </span>
    )
}
