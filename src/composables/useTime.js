export const useTime = () => {
    const getTime = (datetime) => {
        const date = new Date(datetime);
        const hours = date.getHours();
        const minutes = date.getMinutes();
        const seconds = date.getSeconds();
        return `${hours}:${minutes}0`;
    };

    const getHoursBetween = (startTime, endTime) => {
        let start = getTime(startTime);
        let end = getTime(endTime);

        start = parseInt(start.split(":")[0]);
        end = parseInt(end.split(":")[0]);

        return end - start;
    };

    const getArrayHours = (startTime, endTime) => {
        const start = parseInt(startTime.split(":")[0]);
        const end = parseInt(endTime.split(":")[0]);

        let array = [];
        for (let i = start; i < end; i++) {
            array.push(`${i}:00`);
        }

        return array;
    };

    const getDateByWeek = (firstDayOfweek, day = "monday") => {
        const date = new Date(firstDayOfweek);
        const days = {
            monday: 1,
            tuesday: 2,
            wednesday: 3,
            thursday: 4,
            friday: 5,
            saturday: 6,
            sunday: 7,
        };
        const dayNumber = days[day];
        const diff = date.getDate() - date.getDay() + dayNumber - 1;
        let newDate = new Date(date.setDate(diff));
        // format date to YYYY-MM-DD
        newDate = newDate.toISOString().split("T")[0];
        return newDate;
    };

    const isADayBeforeToday = (date) => {
        const today = new Date();
        const day = new Date(date);

        today.setHours(0, 0, 0, 0);

        return day < today;
    };

    return {
        getTime,
        getHoursBetween,
        getArrayHours,
        getDateByWeek,
        isADayBeforeToday,
    };
};
