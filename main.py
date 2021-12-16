def TourneGauche(Degres: number):
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_arrow(ArrowNames.EAST)
    maqueen.motor_run(maqueen.Motors.M2, maqueen.Dir.CW, 64)
    basic.pause(780 * (Degres / 90))
def TourneDroite(Degres2: number):
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_arrow(ArrowNames.WEST)
    maqueen.motor_run(maqueen.Motors.M1, maqueen.Dir.CW, 64)
    basic.pause(780 * (Degres2 / 90))
def EnArriere(Duree: number, Vitesse: number):
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_arrow(ArrowNames.SOUTH)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CCW, Vitesse)
    basic.pause(Duree)
def EnAvant(Duree2: number, Vitesse2: number):
    maqueen.motor_stop(maqueen.Motors.ALL)
    basic.show_arrow(ArrowNames.NORTH)
    maqueen.motor_run(maqueen.Motors.ALL, maqueen.Dir.CW, Vitesse2)
    basic.pause(Duree2)
def Stop():
    maqueen.motor_stop(maqueen.Motors.ALL)
basic.show_icon(IconNames.HEART)
EnAvant(1000, 255)
TourneDroite(80)
EnAvant(1000, 255)
TourneGauche(80)
EnAvant(1000, 255)
EnArriere(2000, 255)
Stop()