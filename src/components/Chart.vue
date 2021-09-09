<script>
import { PolarArea, mixins } from "vue-chartjs";

export default {
  name: "chart",
  extends: PolarArea,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: ["Goals", "Assists", "Shots", "Hits"],
        datasets: [
          {
            label: this.chartData.player,
            backgroundColor: ["rgba(255, 0, 0, 0.3)", "rgba(0, 151, 19, 0.3)", "rgba(191, 0, 255, 0.3)", "rgba(0, 149, 255, 0.3)"],
            data: [this.chartData.goals, this.chartData.assists, this.chartData.sog, this.chartData.hits ],
          },
        ],
      },
      this.options
    );
  },
};
</script>
