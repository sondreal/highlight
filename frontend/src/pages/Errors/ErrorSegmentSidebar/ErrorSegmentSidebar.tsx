import React from 'react';
import styles from './ErrorSegmentSidebar.module.scss';
import classNames from 'classnames/bind';
import { ErrorSegmentButtons } from './SegmentButtons/SegmentButtons';
import { ErrorSegmentPicker } from './SegmentPicker/SegmentPicker';

export const ErrorSegmentSidebar = () => {
    return (
        <>
            <div className={classNames([styles.searchBar])}>
                <ErrorSegmentPicker />
                <ErrorSegmentButtons />
            </div>
        </>
    );
};
