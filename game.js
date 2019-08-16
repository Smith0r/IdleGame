var Game = {};
            
Game.startup = function ()
{
    Game.version = "0.1.1";
    Game.money = 0;
    Game.employees = 0;
    Game.employee_limit = 3;
    Game.upgrades = [];
    Game.unlocks = [];
    Game.unlocked = [];
    Game.per_second = [];
    Game.hires = [];
    Game.buildings = [];
    Game.building_unlocks = [];
    Game.buildings_unlocked = [];

    Game.clicks = 0;
    Game.click_base_cps = 1;
    Game.click_modifier = 1;
                
    Game.upgrades.push(["Super Mouse", "Clicking has twice the money making power.", "Doubles your money making power.", 50, 2, 250, "clicks", "click_modifier", "click-cps", "click_upgrades_showing", "click_upgrades_unlocked", "click-upgrade-", Game.click_base_cps]);
    Game.upgrades.push(["Mega Mouse", "Clicking has twice the money making power.", "Doubles your money making power.", 150, 2, 1000, "clicks", "click_modifier", "click-cps", "click_upgrades_showing", "click_upgrades_unlocked", "click-upgrade-", Game.click_base_cps]);
    Game.upgrades.push(["Super-Mega Mouse", "Clicking has twice the money making power.", "Doubles your money making power.", 500, 2, 2500, "clicks", "click_modifier", "click-cps", "click_upgrades_showing", "click_upgrades_unlocked", "click-upgrade-", Game.click_base_cps]);
    Game.upgrades.push(["Mighty Mouse", "Clicking has twice the money making power.", "Doubles your money making power.", 1000, 2, 5000, "clicks", "click_modifier", "click-cps", "click_upgrades_showing", "click_upgrades_unlocked", "click-upgrade-", Game.click_base_cps]);
    Game.upgrades.push(["Super-Mega-Mighty Mouse", "Clicking has twice the money making power.", "Doubles your money making power.", 2500, 2, 10000, "clicks", "click_modifier", "click-cps", "click_upgrades_showing", "click_upgrades_unlocked", "click-upgrade-", Game.click_base_cps]);
    Game.click_upgrades_showing = [];
    Game.click_upgrades_unlocked = [];

    Game.apprentices = 0;
    Game.apprentice_base_cps = 1;
    Game.apprentice_modifier = 1;
    Game.apprentice_base_cost = 15;
    Game.apprentice_base_multiplier = 1.2;
    Game.per_second.push(["apprentices", "apprentice_base_cps", "apprentice_modifier"]);
    Game.hires.push(["apprentices", Game.apprentice_base_cost, "apprentice_base_multiplier", "apprentice-count", "apprentice-cost", "apprentice-cps", Game.apprentice_base_cps, "Apprentices", "apprentice_modifier"]);
    Game.unlocks.push(["apprentices", 0, "Apprentices", "apprentices-block"]);
    Game.apprentice_upgrades_showing = [];
    Game.apprentice_upgrades_unlocked = [];
    // Apprentice Upgrades
    Game.upgrades.push(["Supplied Coffee", "Company supplied coffee gives your Apprentices a productivity boost.", "Increases Apprentice cash per second by 1.5x", 5, 1.5, 100, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);
    Game.upgrades.push(["Communal Biscuits", "Biscuits for your Apprentices to dig into.", "Doubles all Apprentice cash per second.", 10, 2, 250, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);
    Game.upgrades.push(["Desk Fans", "Faster cooling of your Apprentices improves their mental focus.", "Increases Apprentice cash per second by 2.5x", 25, 2.5, 10000, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);
    Game.upgrades.push(["Casual Fridays", "Feeling at home in their own clothes boosts productivity.", "Doubles all Apprentice cash per second.", 50, 2, 25000, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);
    Game.upgrades.push(["Unpaid Overtime", "Working overtime wrings more cash our of your Apprentices.", "Doubles all Apprentice cash per second.", 100, 2, 50000, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);
    Game.upgrades.push(["Desk Chains", "Chaining your apprentices to their desks wrings extra cash per second out of them.", "Triples apprentices' cash per second.", 150, 3, 100000, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);
    Game.upgrades.push(["Coffee Drips", "Coffee poured directly into your apprentices' veins keeps them awake all hours of the night.", "Quintuples apprentice cash per second.", 250, 5, 250000, "apprentices", "apprentice_modifier", "apprentice-cps", "apprentice_upgrades_showing", "apprentice_upgrades_unlocked", "apprentice-upgrade-", Game.apprentice_base_cps]);

    Game.full_timers = 0;
    Game.full_timers_base_cps = 5;
    Game.full_timers_modifier = 1;
    Game.full_timers_base_cost = 500;
    Game.full_timers_base_multiplier = 1.3;
    Game.per_second.push(["full_timers", "full_timers_base_cps", "full_timers_modifier"]);
    Game.hires.push(["full_timers", Game.full_timers_base_cost, "full_timers_base_multiplier", "full-timer-count", "full-timer-cost", "full-timer-cps", Game.full_timers_base_cps, "Full-Timers", "full_timers_modifier"]);
    Game.upgrades.push(["Delegation", "Delegating some work to the Apprentices leaves your Full-Timers with time to work on bigger projects.", "Increases Full-Timers cash per second by 2x", 5, 2, 5000, "full_timers", "full_timers_modifier", "full-timer-cps", "full_timers_upgrades_showing", "full_timers_upgrades_unlocked", "full-timer-upgrade-", Game.full_timers_base_cps]);
    Game.upgrades.push(["Menial Errands", "Full-Timers can now send Apprentices out for errands, leaving them with more time to get on with their work.", "Increases Full-Timers cash per second by 2x", 10, 2, 15000, "full_timers", "full_timers_modifier", "full-timer-cps", "full_timers_upgrades_showing", "full_timers_upgrades_unlocked", "full-timer-upgrade-", Game.full_timers_base_cps]);
    Game.upgrades.push(["Skip Lunchbreaks", "Full-Timers now skip their lunch breaks.", "Increases Full-Timers cash per second by 3x", 25, 3, 30000, "full_timers", "full_timers_modifier", "full-timer-cps", "full_timers_upgrades_showing", "full_timers_upgrades_unlocked", "full-timer-upgrade-", Game.full_timers_base_cps]);
    Game.unlocks.push(["apprentices", 10, "Full-Timers", "full-timers-block"]);
    Game.full_timers_upgrades_showing = [];
    Game.full_timers_upgrades_unlocked = [];
                
    Game.team_leaders = 0;
    Game.team_leaders_base_cps = 150;
    Game.team_leaders_modifier = 1;
    Game.team_leaders_base_cost = 25000;
    Game.team_leaders_base_multiplier = 1.43;
    Game.per_second.push(["team_leaders", "team_leaders_base_cps", "team_leaders_modifier"]);
    Game.hires.push(["team_leaders", Game.team_leaders_base_cost, "team_leaders_base_multiplier", "team-leader-count", "team-leader-cost", "team-leader-cps", Game.team_leaders_base_cps, "Team Leaders", "team_leaders_modifier"]);
    Game.unlocks.push(["full_timers", 10, "Team Leaders", "team-leaders-block"]);
    Game.team_leaders_upgrades_showing = [];
    Game.team_leaders_upgrades_unlocked = [];
                
    Game.managers = 0;
    Game.managers_base_cps = 500;
    Game.managers_modifier = 1;
    Game.managers_base_cost = 75000;
    Game.managers_base_multiplier = 1.5;
    Game.per_second.push(["managers", "managers_base_cps", "managers_modifier"]);
    Game.hires.push(["managers", Game.managers_base_cost, "managers_base_multiplier", "manager-count", "manager-cost", "manager-cps", Game.managers_base_cps, "Managers", "managers_modifier"]);
    Game.unlocks.push(["team_leaders", 10, "Managers", "managers-block"]);
    Game.managers_upgrades_showing = [];
    Game.managers_upgrades_unlocked = [];

    Game.offices = 0;
    Game.building_floors = 0;
    Game.office_buildings = 0;
    Game.tower_blocks = 0;
    Game.skyscrapers = 0;
    Game.complexes = 0;
                
    // Name, Base Cost, Count Variable, Description, Space Provided, Owned Element
    Game.buildings.push(["Offices", 100, "offices", "Small, cramped office. Provides space for 3 employees.", 3, "offices-owned"]);
    Game.buildings.push(["Building Floors", 1000, "building_floors", "Whole floor of an office block. Provides space for 10 employees.", 10, "floors-owned"]);
    Game.buildings.push(["Office Building", 10000, "office_buildings", "Entire Office building. Provides space for 100 employees.", 100, "buildings-owned"]);
    Game.buildings.push(["Tower Block", 50000, "tower_blocks", "Tower block with many offices. Provides space for 500 employees.", 500, "blocks-owned"]);
    Game.buildings.push(["Skyscraper", 500000, "skyscrapers", "A Skyscraper in the city with a lot of desks. Provides space for 1000 employees.", 1000, "skyscrapers-owned"]);
    Game.buildings.push(["Office Complex", 1000000, "complexes", "A whole complex of offices. It's basically a small village! Provides space for 5000 employees.", 5000, "complexes-owned"]);
                
    Game.building_unlocks.push(["offices", 0, "Office", "offices-block"]);
    Game.building_unlocks.push(["offices", 10, "Building Floor", "building-floors-block"]);
    Game.building_unlocks.push(["building_floors", 10, "Office Building", "office-buildings-block"]);
    Game.building_unlocks.push(["office_buildings", 10, "Tower Blocks", "tower-blocks-block"]);
    Game.building_unlocks.push(["tower_blocks", 10, "Skyscrapers", "skyscrapers-block"]);
    Game.building_unlocks.push(["skyscrapers", 10, "Complexes", "complexes-block"]);
                
    Game.buildings_unlocked.push("Office");
    Game.load();
}
            
Game.load = function ()
{
    var savegame = JSON.parse(localStorage.getItem("Save"));
    if (savegame)
    {
        if (typeof savegame.money !== "undefined") Game.money = savegame.money;
        if (typeof savegame.employees !== "undefined") Game.employees = savegame.employees;
        if (typeof savegame.employee_limit !== "undefined") Game.employee_limit = savegame.employee_limit;
        if (typeof savegame.unlocked !== "undefined") Game.unlocked = savegame.unlocked;
        if (typeof savegame.buildings_unlocked !== "undefined") Game.buildings_unlocked = savegame.buildings_unlocked;
        if (typeof savegame.clicks !== "undefined") Game.clicks = savegame.clicks;
        if (typeof savegame.click_base_cps !== "undefined") Game.click_base_cps = savegame.click_base_cps;
        if (typeof savegame.click_modifier !== "undefined") Game.click_modifier = savegame.click_modifier;
        if (typeof savegame.click_upgrades_showing !== "undefined") Game.click_upgrades_showing = savegame.click_upgrades_showing;
        if (typeof savegame.click_upgrades_unlocked !== "undefined") Game.click_upgrades_unlocked = savegame.click_upgrades_unlocked;
        if (typeof savegame.apprentices !== "undefined") Game.apprentices = savegame.apprentices;
        if (typeof savegame.apprentice_base_cps !== "undefined") Game.apprentice_base_cps = savegame.apprentice_base_cps;
        if (typeof savegame.apprentice_modifier !== "undefined") Game.apprentice_modifier = savegame.apprentice_modifier;
        if (typeof savegame.apprentice_base_cost !== "undefined") Game.apprentice_base_cost = savegame.apprentice_base_cost;
        if (typeof savegame.apprentice_base_multiplier !== "undefined") Game.apprentice_base_multiplier = savegame.apprentice_base_multiplier;
        if (typeof savegame.apprentice_upgrades_showing !== "undefined") Game.apprentice_upgrades_showing = savegame.apprentice_upgrades_showing;
        if (typeof savegame.apprentice_upgrades_unlocked !== "undefined") Game.apprentice_upgrades_unlocked = savegame.apprentice_upgrades_unlocked;
        if (typeof savegame.team_leaders !== "undefined") Game.team_leaders = savegame.team_leaders;
        if (typeof savegame.team_leaders_base_cps !== "undefined") Game.team_leaders_base_cps = savegame.team_leaders_base_cps;
        if (typeof savegame.team_leaders_modifier !== "undefined") Game.team_leaders_modifier = savegame.team_leaders_modifier;
        if (typeof savegame.team_leaders_base_cost !== "undefined") Game.team_leaders_base_cost = savegame.team_leaders_base_cost;
        if (typeof savegame.team_leaders_base_multiplier !== "undefined") Game.team_leaders_base_multiplier = savegame.team_leaders_base_multiplier;
        if (typeof savegame.team_leaders_upgrades_showing !== "undefined") Game.team_leaders_upgrades_showing = savegame.team_leaders_upgrades_showing;
        if (typeof savegame.team_leaders_upgrades_unlocked !== "undefined") Game.team_leaders_upgrades_unlocked = savegame.team_leaders_upgrades_unlocked;
        if (typeof savegame.full_timers !== "undefined") Game.full_timers = savegame.full_timers;
        if (typeof savegame.full_timers_base_cps !== "undefined") Game.full_timers_base_cps = savegame.full_timers_base_cps;
        if (typeof savegame.full_timers_modifier !== "undefined") Game.full_timers_modifier = savegame.full_timers_modifier;
        if (typeof savegame.full_timers_base_cost !== "undefined") Game.full_timers_base_cost = savegame.full_timers_base_cost;
        if (typeof savegame.full_timers_base_multiplier !== "undefined") Game.full_timers_base_multiplier = savegame.full_timers_base_multiplier;
        if (typeof savegame.full_timers_upgrades_showing !== "undefined") Game.full_timers_upgrades_showing = savegame.full_timers_upgrades_showing;
        if (typeof savegame.full_timers_upgrades_unlocked !== "undefined") Game.full_timers_upgrades_unlocked = savegame.full_timers_upgrades_unlocked;
        if (typeof savegame.managers !== "undefined") Game.managers = savegame.managers;
        if (typeof savegame.managers_base_cps !== "undefined") Game.managers_base_cps = savegame.managers_base_cps;
        if (typeof savegame.managers_modifier !== "undefined") Game.managers_modifier = savegame.managers_modifier;
        if (typeof savegame.managers_base_cost !== "undefined") Game.managers_base_cost = savegame.managers_base_cost;
        if (typeof savegame.managers_base_multiplier !== "undefined") Game.managers_base_multiplier = savegame.managers_base_multiplier;
        if (typeof savegame.managers_upgrades_showing !== "undefined") Game.managers_upgrades_showing = savegame.managers_upgrades_showing;
        if (typeof savegame.managers_upgrades_unlocked !== "undefined") Game.managers_upgrades_unlocked = savegame.managers_upgrades_unlocked;
        if (typeof savegame.offices !== "undefined") Game.offices = savegame.offices;
        if (typeof savegame.building_floors !== "undefined") Game.building_floors = savegame.building_floors;
        if (typeof savegame.office_buildings !== "undefined") Game.office_buildings = savegame.office_buildings;
        if (typeof savegame.tower_blocks !== "undefined") Game.tower_blocks = savegame.tower_blocks;
        if (typeof savegame.skyscrapers !== "undefined") Game.skyscrapers = savegame.skyscrapers;
        if (typeof savegame.complexes !== "undefined") Game.complexes = savegame.complexes;

        // Update GUI
        document.getElementById("employees").innerHTML = Game.employees;
        document.getElementById("employee-limit").innerHTML = Game.employee_limit;
        document.getElementById("click-cps").innerHTML = (Game.click_base_cps * Game.click_modifier);
    }
    Game.updatePerSecond();
    Game.loadUnlocks();
    Game.loadBuildingUnlocks();
}
            
Game.makeMoney = function()
{
    Game.money = Game.money + (Game.click_base_cps * Game.click_modifier);
    Game.clicks = Game.clicks + 1;
    Game.updateMoney();
}
            
Game.updateMoney = function()
{
    document.getElementById("balance").innerHTML = Game.money.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
            
Game.hire = function(index, number)
{
    var unit = Game.hires[index];
    var cost = Math.floor(unit[1] * Math.pow(Game[unit[2]], Game[unit[0]]));
    if (Game.money >= cost && (Game.employees + number) <= Game.employee_limit)
    {
        Game[unit[0]] = (Game[unit[0]] + number);
        Game.employees = Game.employees + number;
        Game.money = Game.money - cost;
        document.getElementById("employees").innerHTML = Game.employees;
        document.getElementById(unit[3]).innerHTML = Game[unit[0]];
        Game.updateMoney();
        var nextCost = Math.floor(unit[1] * Math.pow(Game[unit[2]], Game[unit[0]]));
        document.getElementById(unit[4]).innerHTML = nextCost.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        Game.updatePerSecond();
    }
}
            
Game.updatePerSecond = function()
{
    var per_second_int = 0;
    Game.per_second.forEach(function (el) {
        per_second_int = (per_second_int + (Game[el[0]] * (Game[el[1]] * Game[el[2]])));
    });
    document.getElementById("per-second").innerHTML = per_second_int.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
}
            
Game.logic = function ()
{
    Game.processCPS();
    Game.checkForUpgrades();
    Game.checkForUnlocks();
    Game.checkForBuildingUnlocks();
}
            
Game.processCPS = function ()
{
    Game.per_second.forEach(function (el) {
        Game.money = (Game.money + (Game[el[0]] * (Game[el[1]] * Game[el[2]])));
    });
    Game.updateMoney();
}
            
Game.checkForUpgrades = function()
{
    // Name, Description, Effect, Unlocks at, Multiplier, Cost, Counter Var, Modifier Var, CPS ID, Showing Var, Unlocked Var, Upgrade Container Var, Base CPS
    Game.upgrades.forEach(function (el, i) {
        if (Game[el[6]] >= el[3] && Game[el[9]].includes(i) === false)
        {
            if (Game[el[10]].includes(i) === false)
            {
                document.getElementById("upgrade-area").innerHTML += '<div id="'+ el[11] + i +'" class="upgrade"><p><strong>'+ el[0] +'</strong></p><p>'+ el[1] +'</p><p style="font-style: italic;">'+ el[2] +'</p><p>Cost: £'+ el[5] +' <button class="btn btn-primary" onclick="Game.buyUpgrade('+ i +')">Buy</button></p></div>';
                document.getElementById(el[11] + i).className += " active";
                Game[el[9]].push(i);
            }
        }
    });
}
            
Game.buyUpgrade = function(index)
{
    var upgrade = Game.upgrades[index];
    if (Game.money >= upgrade[5])
    {
        Game.money = Game.money - upgrade[5];
        Game.updateMoney();
        Game[upgrade[7]] = (Game[upgrade[7]] * upgrade[4]); // Problem Line
        document.getElementById(upgrade[8]).innerHTML = (upgrade[12] * upgrade[4]).toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2});
        Game[upgrade[10]].push(index);
        var element = document.getElementById(upgrade[11] + index);
        element.parentNode.removeChild(element);
        Game.updatePerSecond();
    }
}
            
Game.checkForUnlocks = function()
{
    Game.unlocks.forEach(function (el, i) {
        if (Game[el[0]] >= el[1] && Game.unlocked.includes(el[2]) === false)
        {
            document.getElementById("worker-area").innerHTML += '<div id="'+ el[3] +'"><h4>'+ el[2] +' <button class="btn btn-primary" onclick="Game.hire('+ i +', 1)">Hire</button></h4><hr /><p>Cost: £<span id="'+ Game.hires[i][4] +'">'+ Game.hires[i][1] +'</span></p><p>Employed: <span id="'+ Game.hires[i][3] +'">0</span></p><p><span style="font-style: italic;">Makes £<span id="'+ Game.hires[i][5] +'">'+ Game.hires[i][6] +'</span> per second.</span></p></div>';
            Game.unlocked.push(el[2]);
        }
    });
}
            
Game.loadUnlocks = function()
{
    Game.unlocked.forEach(function (el, i) {
        var cost = Math.floor(Game.hires[i][1] * Math.pow(Game[Game.hires[i][2]], Game[Game.hires[i][0]]));
        // Count, Base, Modifier
        var cps = (Game[Game.hires[i][0]] * (Game.hires[i][6] * Game[Game.hires[i][8]]));
        document.getElementById("worker-area").innerHTML += '<div id="'+ Game.hires[i][0] +'"><h4>'+ Game.hires[i][7] +' <button class="btn btn-primary" onclick="Game.hire('+ i +', 1)">Hire</button></h4><hr /><p>Cost: £<span id="'+ Game.hires[i][4] +'">'+ cost +'</span></p><p>Employed: <span id="'+ Game.hires[i][3] +'">'+ Game[Game.hires[i][0]] +'</span></p><p><span style="font-style: italic;">Makes £<span id="'+ Game.hires[i][5] +'">'+ cps +'</span> per second.</span></p></div>';
    });
}
            
Game.checkForBuildingUnlocks = function()
{
    Game.building_unlocks.forEach(function (el, i) {
        if (Game[el[0]] >= el[1] && Game.buildings_unlocked.includes(el[2]) === false)
        {
            document.getElementById("workspaces").innerHTML += '<div class="building"><h4>'+ Game.buildings[i][0] +' <button class="btn btn-primary" onclick="Game.buyBuilding('+ i +', 1)">Buy</button></h4><hr /><p>Cost: £<span class="building-cost">'+ Game.buildings[i][1] +'</span></p><p>Owned: <span id="'+ Game.buildings[i][5] +'">0</span></p><p><span style="font-style: italic;">'+ Game.buildings[i][3] +'</span></p></div>';
            Game.buildings_unlocked.push(el[2]);
        }
    });
}
            
Game.loadBuildingUnlocks = function()
{
    Game.buildings_unlocked.forEach(function (el, i) {
        document.getElementById("workspaces").innerHTML += '<div class="building"><h4>'+ Game.buildings[i][0] +' <button class="btn btn-primary" onclick="Game.buyBuilding('+ i +', 1)">Buy</button></h4><hr /><p>Cost: £<span class="building-cost">'+ Game.buildings[i][1] +'</span></p><p>Owned: <span id="'+ Game.buildings[i][5] +'">'+ Game[Game.buildings[i][2]] +'</span></p><p><span style="font-style: italic;">'+ Game.buildings[i][3] +'</span></p></div>';
    });
}
            
Game.buyBuilding = function(index, number)
{
    if (Game.money >= Game.buildings[index][1])
    {    
        Game[Game.buildings[index][2]] = Game[Game.buildings[index][2]] + number;
        Game.employee_limit = Game.employee_limit + Game.buildings[index][4];
        Game.money = Game.money - Game.buildings[index][1];
        Game.updateMoney();
        document.getElementById(Game.buildings[index][5]).innerHTML = Game[Game.buildings[index][2]];
        document.getElementById("employee-limit").innerHTML = Game.employee_limit;
    }
}
            
var Save = {};
            
Save.saveGame = function()
{
    Save.money = Game.money;
    Save.employees = Game.employees;
    Save.employee_limit = Game.employee_limit;
    Save.unlocked = Game.unlocked;
    Save.buildings_unlocked = Game.buildings_unlocked;
    Save.clicks = Game.clicks;
    Save.click_base_cps = Game.click_base_cps;
    Save.click_modifier = Game.click_modifier;
    Save.click_upgrades_showing = Game.click_upgrades_showing;
    Save.click_upgrades_unlocked = Game.click_upgrades_unlocked;
    Save.apprentices = Game.apprentices;
    Save.apprentice_base_cps = Game.apprentice_base_cps;
    Save.apprentice_modifier = Game.apprentice_modifier;
    Save.apprentice_base_cost = Game.apprentice_base_cost;
    Save.apprentice_base_multiplier = Game.apprentice_base_multiplier;
    Save.apprentice_upgrades_showing = Game.apprentice_upgrades_showing;
    Save.apprentice_upgrades_unlocked = Game.apprentice_upgrades_unlocked;
    Save.team_leaders = Game.team_leaders;
    Save.team_leaders_base_cps = Game.team_leaders_base_cps;
    Save.team_leaders_modifier = Game.team_leaders_modifier;
    Save.team_leaders_base_cost = Game.team_leaders_base_cost;
    Save.team_leaders_base_multiplier = Game.team_leaders_base_multiplier;
    Save.team_leaders_upgrades_showing = Game.team_leaders_upgrades_showing;
    Save.team_leaders_upgrades_unlocked = Game.team_leaders_upgrades_unlocked;
    Save.full_timers = Game.full_timers;
    Save.full_timers_base_cps = Game.full_timers_base_cps;
    Save.full_timers_modifier = Game.full_timers_modifier;
    Save.full_timers_base_cost = Game.full_timers_base_cost;
    Save.full_timers_base_multiplier = Game.full_timers_base_multiplier;
    Save.full_timers_upgrades_showing = Game.full_timers_upgrades_showing;
    Save.full_timers_upgrades_unlocked = Game.full_timers_upgrades_unlocked;
    Save.managers = Game.managers;
    Save.managers_base_cps = Game.managers_base_cps;
    Save.managers_modifier = Game.managers_modifier;
    Save.managers_base_cost = Game.managers_base_cost;
    Save.managers_base_multiplier = Game.managers_base_multiplier;
    Save.managers_upgrades_showing = Game.managers_upgrades_showing;
    Save.managers_upgrades_unlocked = Game.managers_upgrades_unlocked;
    Save.offices = Game.offices;
    Save.building_floors = Game.building_floors;
    Save.office_buildings = Game.office_buildings;
    Save.tower_blocks = Game.tower_blocks;
    Save.skyscrapers = Game.skyscrapers;
    Save.complexes = Game.complexes;
    localStorage.setItem("Save", JSON.stringify(Save));
}
            
Game.startup();
Game.logic();
            
window.setInterval(function () {
    Game.logic();
}, 1000);
            
window.setInterval(function () {
    Save.saveGame();
}, 30000);