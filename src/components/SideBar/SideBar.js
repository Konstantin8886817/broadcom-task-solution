import React, {useEffect} from 'react';
import {useState} from 'react';
import classes from './SideBar.module.css';

import SearchField from '../SearchField/SearchField';
import ReportsList from '../ReportsList/ReportsList';


export default (props) => {
    const [state, updateState] = useState({
        reports: [],
        searchReports: [],
        searchField: '',
        reverseSort: false,
        loading: true
    });

    function onUpdateSearchField(request) {
        let newData = state.reports.filter(report => report.name.toLowerCase().startsWith(request));
        updateState({...state, searchReports: newData, searchField: request});

    }

    function sortReports(type) {
        let temp = [...state.reports];
        switch (type) {
            case 'ascending':
                temp.sort((a, b) => Number(a.updated) - Number(b.updated));
                break;
            case 'descending':
                temp.sort((a, b) => Number(b.updated) - Number(a.updated));
                break;
            default:
                temp.sort((a, b) => Number(a.updated) - Number(b.updated));
        }
        return temp;
    }

    function onSortHandler(type) {
        let tmp = sortReports(type);
        updateState({...state, reports: tmp, reverseSort: !state.reverseSort});
    }

    useEffect(() => {
        function fetchData(){
            fetch("/sidebar.json").then((res => res.json()))
                .then(body => updateState(s => ({...s,loading:false,reports: body})));
        }
        fetchData();
    }, []);

    return (
        <>
            {state.loading ? <div className={classes.loader}/> :
                <div className={classes.sidebar}>
                    <div className={classes.title}>
                        <h2>Reports {state.reports.length}</h2>
                        <div className={classes.rightside}>
                            <button className={classes.reload}/>
                            <button className={classes.close} onClick={props.onCloseHandler}/>
                        </div>
                    </div>

                    {/* hook component returns search request */}
                    <div>
                        <SearchField className={classes.search} field={state.searchField}
                                     updateField={onUpdateSearchField} sort={onSortHandler}/>
                    </div>


                    {/* sorting and showing results */}
                    {state.searchField ? <ReportsList list={state.searchReports}/> :
                        <ReportsList list={state.reports}/>}
                </div>
            }
        </>
    );
}
