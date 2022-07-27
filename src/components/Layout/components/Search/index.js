import { faCircleXmark, faSpinner, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState, useRef } from 'react';

import HaedlessTipy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '../../../Popper';
import AcountItem from '../AccountIltem';
// import Upload from '../../../pages/Upload';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './Search.module.scss';

const cx = classNames.bind(styles);

function Search() {
    const [searchValue, setSearchValue] = useState('');
    const [searchResult, setSearchResult] = useState([]);
    const [showResult, setShowResult] = useState(true);
    const inputRef = useRef();

    useEffect(() => {
        setTimeout(() => {
            setSearchResult([1, 1, 1]);
        }, 0);
    }, []);
    const handleHideResult = () => {
        setShowResult(false);
    };
    return (
        <HaedlessTipy
            interactive
            visible={showResult && searchResult.length > 0}
            render={(attrs) => (
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>Acounts</h4>
                        <AcountItem />
                        <AcountItem />
                        <AcountItem />
                        <AcountItem />
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input
                    ref={inputRef}
                    value={searchValue}
                    placeholder="Search accounts and videos"
                    spellCheck={false}
                    onChange={(e) => setSearchValue(e.target.value)}
                    onFocus={() => setShowResult(true)}
                />
                {!!searchValue && (
                    <button
                        className={cx('clear')}
                        onClick={() => {
                            setSearchValue('');
                            inputRef.current.focus();
                        }}
                    >
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                )}

                {/* icon clear */}

                {/* loading */}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner} /> */}

                {/* search */}

                <button className={cx('search-btn')}>
                    <FontAwesomeIcon icon={faMagnifyingGlass} />
                </button>
            </div>
        </HaedlessTipy>
    );
}

export default Search;
