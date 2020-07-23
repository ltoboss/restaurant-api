import { Command } from 'simple-command-bus';
export default class DeleteLogBeforeDayCommand extends Command {
    private days;
    constructor(days?: number);
    getDays(): number;
}
