import {Chart, registerables} from 'chart.js-v3';
import plugin from '../../dist/chartjs-plugin-datalabels.js';

Chart.register(...registerables);
Chart.register(plugin);
