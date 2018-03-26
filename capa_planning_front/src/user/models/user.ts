import { UserWorkingDay } from './user_working_day';

export class User {

    public id: string;
    public firstName: string;
    public lastName: string;
    public email: string;
    public password: string;
    public userWorkingDays: UserWorkingDay[];

    constructor() { }

}
