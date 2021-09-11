<script>
import { PolarArea, mixins } from "vue-chartjs";

export default {
  name: "chart-goalie",
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
        labels: ["Shots", "Goals", "Games", "Saves", "Wins"],
        datasets: [
          {
            label: this.chartData.player,
            backgroundColor: ["rgba(255, 0, 0, 0.3)", "rgba(0, 151, 19, 0.3)", "rgba(191, 0, 255, 0.3)", "rgba(0, 149, 255, 0.3)", "rgba(255, 0, 0, 0.3)"],
            data: [this.chartData.shots_allowed, this.chartData.ga, this.chartData.games, this.chartData.saves, this.chartData.wins ],
          },
        ],
      },
      this.options
    );
  },
};
</script>
