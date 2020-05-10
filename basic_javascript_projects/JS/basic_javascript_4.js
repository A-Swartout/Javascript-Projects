function my_dictionary() {
    var laser_rifle = {
        ammo:"laser cells",
        color:"black",
        chassis:"rifle",
        fire_rate:30 + " rounds per minute",
        damage_type:"burn & penetration",
        profession_lvl:"noob"
    };
    delete laser_rifle.profession_lvl;
    document.getElementById("dictionary").innerHTML = laser_rifle.profession_lvl;
}