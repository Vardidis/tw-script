$(document).ready(function() {
    $('#troop_confirm_submit').focus();
    Place.confirmScreen.init({"type":"attack","units":["spear","sword","axe","archer","spy","light","marcher","heavy","ram","catapult","knight","snob"],"send_units":{"spear":1,"sword":0,"axe":0,"archer":0,"spy":0,"light":0,"marcher":0,"heavy":0,"ram":0,"catapult":0,"knight":0,"snob":0},"available_units":{"spear":1,"sword":0,"axe":0,"archer":0,"spy":0,"light":0,"marcher":0,"heavy":0,"ram":0,"catapult":0,"knight":0,"snob":0,"militia":0},"additional_time":0});
});