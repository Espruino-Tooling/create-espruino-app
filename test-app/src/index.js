import {DeviceController} from '@espruino-tools/device-controller'
import './styles/app.scss'
const device = new DeviceController();

export const connect = () => device.connect()

