control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_RISE, function () {
    presence = 1
})
function stop_recharge_battery () {
	
}
function start_recharge_battery () {
	
}
function turn_off_big_light () {
	
}
function turn_off_small_light () {
	
}
function turn_on_big_light () {
	
}
control.onEvent(EventBusSource.MICROBIT_ID_IO_P0, EventBusValue.MICROBIT_PIN_EVT_FALL, function () {
    presence = 0
})
function read_sensors () {
    light_intensity = Environment.ReadLightIntensity(AnalogPin.P1)
    if (Environment.PIR(DigitalPin.P0)) {
        presence = 1
    } else {
        presence = 0
    }
    if (light_intensity > daylight_th) {
        presence = 1
    } else {
        presence = 0
    }
}
function turn_on_small_light () {
	
}
function print_on_display () {
    let is_daylight = 0
    OLED.clear()
    OLED.writeString("Light :")
    OLED.writeNumNewLine(light_intensity)
    OLED.writeString("Is daylight : ")
    OLED.writeNumNewLine(is_daylight)
    OLED.writeString("Presence : ")
    OLED.writeNumNewLine(presence)
}
let light_intensity = 0
let presence = 0
let daylight_th = 0
OLED.init(128, 64)
daylight_th = 200
basic.forever(function () {
    basic.pause(100)
})
