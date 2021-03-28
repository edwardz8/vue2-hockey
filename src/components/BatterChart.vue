<script>
import { Bar, mixins } from "vue-chartjs";

export default {
  name: "batter-chart",
  extends: Bar,
  mixins: [mixins.reactiveProp],
  props: {
    chartData: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    },
  },
  mounted() {
    this.renderChart(
      {
        labels: ["Hits", "HR", "RBI", "SB", "Runs", "Ks"],
        datasets: [
          {
            label: this.chartData.name,
            minBarLength: 2,
            backgroundColor: [
              "rgba(300, 400, 30, 0.3)",
              "rgba(0, 151, 19, 0.3)",
              "rgba(0, 800, 100, 0.3)",
              "rgba(600, 200, 19, 0.3)",
              "rgba(600, 200, 19, 0.3)",
              "rgba(255, 0, 15, 0.4)",
              "rgba(600, 200, 19, 0.3)",
            ],
            data: [
              this.chartData.hits,
              this.chartData.home_runs,
              this.chartData.runs_batted_in,
              this.chartData.stolen_bases,
              this.chartData.runs,
              this.chartData.strikeouts
            ],
          },
        ],
      },
      this.options
    );
  },
};

/* 
                plate_appearances
                base_running
                caught_stealing
                offensive_runs_above_average
                defensive_runs_above_average
                doubles
                triples
                fielding_percentage
                slugging_percentage
                walks
                on_base_percentage
                on_base_plus_slugging
*/
</script>
