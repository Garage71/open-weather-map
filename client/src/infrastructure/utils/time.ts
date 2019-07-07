import moment from 'moment';

const unixTimeWithTimeZone = (time: number): moment.Moment => {
    const withotTimeZone = moment.unix(time);
    return withotTimeZone;
};

export const unixTimeToLocalDateTime = (time: number): string => {
    const withTz = unixTimeWithTimeZone(time);
    const dt = withTz.format('HH:mm MMM Do');
    return dt;
};

export const unixTimeToLocal = (time: number): string => {
    const withTz = unixTimeWithTimeZone(time);
    const dt = withTz.format('HH:mm');
    return dt;
};
