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
    },
    {
        id: "654321",
        weeks: 
        [
            {
                weeknumber: 42,
                projects: 
                [
                    {
                        id: 2, 
                        timeLogs: 
                        [
                             {date: "2018-01-01", isReady: false}
                            ,{date: "2018-01-02", isReady: false}
                            ,{date: "2018-01-03", isReady: false}
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

var date1 = "2018-01-04";
var personid = "123456";

console.log("isDataReady", isDateReady(date1, person, personid));

function isDateReady(date1, persons, personid){
    //return true!!!!! 
    const timelogs = persons.some(function (person){
        return person.id == "123456"
    });
    
    var res1 = false;
    persons.forEach(person => {
        person.weeks.forEach(week => {
            week.projects.forEach(project => {
                project.timeLogs.forEach(timelog => {
                    if (timelog.date == date1 && person.id == personid && timelog.isReady) res1 = true;
                });
            });
        });
    }); 
        

    console.log("res1", res1);
    return res1;
}