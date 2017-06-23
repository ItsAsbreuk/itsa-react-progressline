"use strict";

/**
 * Description here
 *
 *
 *
 * <i>Copyright (c) 2016 ItsAsbreuk - http://itsasbreuk.nl</i><br>
 * New BSD License - http://choosealicense.com/licenses/bsd-3-clause/
 *
 *
 * @module component.jsx
 * @class Component
 * @since 15.0.0
*/

const React = require("react"),
    PropTypes = require("prop-types"),
    MAIN_CLASS = "itsa-progressline",
    MAIN_CLASS_PREFIX = MAIN_CLASS+"-",
    MAIN_CLASS_LINE = MAIN_CLASS_PREFIX+"line",
    MAIN_CLASS__LINEPREFIX = MAIN_CLASS_LINE+"-";

class Component extends React.Component {
    constructor(props) {
        super(props);
        const instance = this;
        instance.createLine = instance.createLine.bind(instance);
        instance.createMarker = instance.createMarker.bind(instance);
    }

    createLine(i, lineStyle) {
        return (
            <div className="itsa-progressline-line"
                key={i}
                style={lineStyle} />
        );
    }

    createMarker(iKey, iMarker, linePercent, percent, shadedPercent) {
        const checked = (linePercent<=percent),
            checkedShaded = shadedPercent && (linePercent<=shadedPercent),
            props = this.props;
        let classname = MAIN_CLASS_PREFIX+"marker",
            backwardsFill;
        if (checked || checkedShaded) {
            classname += " "+MAIN_CLASS_PREFIX+"checked";
            checked || (classname += " "+MAIN_CLASS_PREFIX+"checked-transparent");
            if ((props.endGradient) && ((iMarker>0) || !props.startMarker)) {
                backwardsFill = <div className={MAIN_CLASS__LINEPREFIX+"backwardsfill"} />;
            }
        }
        return (
            <div className={MAIN_CLASS_PREFIX+"item"} key={iKey} >
                <div className={classname} />
                <div className={MAIN_CLASS_PREFIX+"label"}
                    dangerouslySetInnerHTML={{__html: props.markers[iMarker]}} />
                {backwardsFill}
            </div>
        );
    }

    /**
     * React render-method --> renderes the Component.
     *
     * @method render
     * @return ReactComponent
     * @since 15.0.0
     */
    render() {
        let items = [],
            markerIndex = 0,
            i = 0,
            j = 0,
            className = MAIN_CLASS,
            count, lineWidth, lineStyle, lines, shadedLine, endGradientShaded,
            lineStyleChecked, startGradient, endGradient, lineStyleCheckedShaded;
        const instance = this,
            props = instance.props,
            propsClassName = props.className,
            markers = props.markers,
            markerCount = markers.length,
            startMarker = props.startMarker,
            endMarker = props.endMarker,
            percent = Math.max(0, Math.min(100, props.percent)),
            shadedPercent = props.shadedPercent,
            showShadedLine = shadedPercent && (shadedPercent>percent);

        count = 2*markerCount;
        lines = markerCount + 1;
        if (startMarker) {
            count--;
            lines--;
        }
        if (endMarker) {
            count--;
            lines--;
        }

        lineWidth = (100/lines);
        lineStyle = {width: lineWidth+"%"};
        lineStyleChecked = {width: percent+"%"};

        if (startMarker) {
            items.push(instance.createMarker(i++, markerIndex++, 0, percent));
        }
        while (i<=count) {
            items.push(instance.createLine(i++, lineStyle));
            if ((i<count) || endMarker) {
                items.push(instance.createMarker(i++, markerIndex++, ++j*lineWidth, percent, shadedPercent));
            }
        }

        if (!startMarker && (percent>0) && props.startGradient) {
            startGradient = <div className={MAIN_CLASS__LINEPREFIX+'startgradient'} />;
        }
        if ((percent<100) && props.endGradient && !shadedPercent) {
            endGradient = <div className={MAIN_CLASS__LINEPREFIX+'endgradient'} />;
        }
        propsClassName && (className+=" "+propsClassName);
        if (showShadedLine) {
            lineStyleCheckedShaded = {width: shadedPercent+"%"};
            if ((shadedPercent<100) && props.endGradient) {
                endGradientShaded = <div className={MAIN_CLASS__LINEPREFIX+'endgradient'} />;
            }
            shadedLine = (
                <div className={MAIN_CLASS__LINEPREFIX+'checked '+MAIN_CLASS__LINEPREFIX+'transparent'} style={lineStyleCheckedShaded} >
                    {endGradientShaded}
                </div>
            );
        }
        return (
            <div className={className}>
                {shadedLine}
                <div className={MAIN_CLASS__LINEPREFIX+'checked'} style={lineStyleChecked} >
                    {endGradient}
                    {startGradient}
                </div>
                {items}
            </div>
        );
    }
}

Component.propTypes = {
    /**
     * The class that should be set on the element
     *
     * @property className
     * @type String
     * @since 0.0.1
    */
    className: PropTypes.string,

    /**
     * The percentage that progressline is filled.
     *
     * @property endMarker
     * @type Boolean
     * @default true
     * @since 15.0.0
    */
    percent: PropTypes.number,

    /**
     * Whether the progressline should end with a gradient.
     *
     * @property endGradient
     * @type Boolean
     * @default true
     * @since 15.0.0
    */
    endGradient: PropTypes.bool,

    /**
     * Whether an endMarker should be drawn.
     *
     * @property endMarker
     * @type Boolean
     * @default true
     * @since 15.0.0
    */
    endMarker: PropTypes.bool,

    /**
     * The markers that are written along the progressline
     *
     * @property markers
     * @type Array
     * @since 15.0.0
    */
    markers: PropTypes.array.isRequired,

    /**
     * The percentage that a SECOND shaded progressline is filled,
     * which should go further than `percent`.
     * As from the `percent` the line will continue semi-transparent.
     *
     * @property shadedPercent
     * @type Boolean
     * @default true
     * @since 15.0.0
    */
    shadedPercent: PropTypes.number,

    /**
     * Whether the progressline should start with a gradient.
     * Only visible when `startMarker` is false.
     *
     * @property startGradient
     * @type Boolean
     * @default true
     * @since 15.0.0
    */
    startGradient: PropTypes.bool,

    /**
     * Whether a startMarker should be drawn.
     *
     * @property startMarker
     * @type Boolean
     * @default false
     * @since 15.0.0
    */
    startMarker: PropTypes.bool
};

Component.defaultProps = {
    endGradient: true,
    endMarker: true,
    percent: 0,
    startGradient: true,
    startMarker: false
};

module.exports = Component;
