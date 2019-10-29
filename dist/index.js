"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tabris_1 = require("tabris");
new tabris_1.Button({ layoutData: 'center', text: 'Tap here' })
    .onSelect(showText)
    .appendTo(tabris_1.contentView);
new tabris_1.TextView({ centerX: true, bottom: 'prev() 20', font: '24px' })
    .appendTo(tabris_1.contentView);
function showText() {
    $(tabris_1.TextView).only().text = 'Tabris.js rocks!';
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi9zcmMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxtQ0FBcUQ7QUFFckQsSUFBSSxlQUFNLENBQUMsRUFBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQztLQUNqRCxRQUFRLENBQUMsUUFBUSxDQUFDO0tBQ2xCLFFBQVEsQ0FBQyxvQkFBVyxDQUFDLENBQUM7QUFFekIsSUFBSSxpQkFBUSxDQUFDLEVBQUMsT0FBTyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUUsV0FBVyxFQUFFLElBQUksRUFBRSxNQUFNLEVBQUMsQ0FBQztLQUM3RCxRQUFRLENBQUMsb0JBQVcsQ0FBQyxDQUFDO0FBRXpCLFNBQVMsUUFBUTtJQUNmLENBQUMsQ0FBQyxpQkFBUSxDQUFDLENBQUMsSUFBSSxFQUFFLENBQUMsSUFBSSxHQUFHLGtCQUFrQixDQUFDO0FBQy9DLENBQUMifQ==