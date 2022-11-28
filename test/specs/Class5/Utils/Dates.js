const moment = require("moment/moment");

class Dates {

    getCurrentDate() {
        const now = moment();
        return now.format('D');
    }

    getCurrentMonthNameInShort() {
        const now = moment();
        return now.format('MMM');
    }

    getCurrentYear() {
        const now = moment();
        return now.year()
    }

}
module.exports = Dates;