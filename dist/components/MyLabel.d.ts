/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
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
    fontColor?: string;
}
export declare const MyLabel: ({ label, size, color, allCaps, fontColor }: MyLabelProps) => JSX.Element;
