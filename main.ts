input.onButtonPressed(Button.A, function () {
    radio.sendNumber(0)
    EnAvant(2000, 255)
    radio.sendNumber(1)
    TourneDroite(90)
    EnAvant(2000, 255)
    radio.sendNumber(2)
    EnArriere(2000, 255)
    radio.sendNumber(3)
    TourneGauche(80)
    EnAvant(2000, 255)
    radio.sendNumber(4)
    Stop()
})
function TourneGauche (Degres: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.East)
    maqueen.motorRun(maqueen.Motors.M2, maqueen.Dir.CW, 64)
    basic.pause(760 * (Degres / 90))
    maqueen.motorStop(maqueen.Motors.M2)
}
function TourneDroite (Degres: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.West)
    maqueen.motorRun(maqueen.Motors.M1, maqueen.Dir.CW, 64)
    basic.pause(760 * (Degres / 90))
    maqueen.motorStop(maqueen.Motors.M1)
}
function EnArriere (Duree: number, Vitesse: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.South)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CCW, Vitesse)
    basic.pause(Duree)
}
function EnAvant (Duree: number, Vitesse: number) {
    maqueen.motorStop(maqueen.Motors.All)
    basic.showArrow(ArrowNames.North)
    maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, Vitesse)
    basic.pause(Duree)
}
function Stop () {
    maqueen.motorStop(maqueen.Motors.All)
}
basic.showIcon(IconNames.TShirt)
radio.setGroup(1)
