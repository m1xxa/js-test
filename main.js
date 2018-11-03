/* извне поступает одна и та же персона,
 поэтому при переборе дат piwt и pdwt ставятся некорректные значение */
/* надо помимо дат передавать еще проэкт или что-то такое */


var person = 
[
    {
        id: "123456",
        weeks: 
        [
            {
                weeknumber: 42,
                projects: 
                [
                    {
                        id: 1, 
                        timeLogs: 
                        [
                             {date: "2018-01-01", isReady: true}
                            ,{date: "2018-01-02", isReady: true}
                            ,{date: "2018-01-03", isReady: true}
                            ,{date: "2018-01-04", isReady: false}
                            ,{date: "2018-01-05", isReady: false}
                        ]
                    },
                    {
                        id: null, 
                        timeLogs: 
                        [
                             {date: "2018-01-01", isReady: false}
                            ,{date: "2018-01-02", isReady: false}
                            ,{date: "2018-01-03", isReady: false}
                            ,{date: "2018-01-04", isReady: false}
                            ,{date: "2018-01-05", isReady: false}
                        ]
                    },
                ]
            }
        ]
    }
]

var date1 = "2018-01-01"

isDateReady(date1, person)

function isDateReady(date1, person){
    
}