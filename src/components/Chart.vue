<script>
import { PolarArea, mixins } from "vue-chartjs";

export default {
  name: "chart",
  extends: PolarArea,
  mixins: [mixins.reactiveProp],
  props: {
    // id: { type: Number },
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  data() {
    return {
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            },
            gridLines: {
              display: true
            }
          }],
          xAxes: [{
            gridLines: {
              display: true
            }
          }]
        },
        legend: {
          display: true
        },
        responsive: true,
        maintainAspectRatio: false
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
}
</script>
