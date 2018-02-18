import { environment } from '../../environments/environment';

const isDev: boolean = !environment.production;

const host: string = isDev ? 'localhost' : window.location.hostname;
const apiPort: string = isDev ? '3000' : (window.location.port ? '' + window.location.port : '');

export const API_URL: string = 'http://' + host + ':' + apiPort + '/api';