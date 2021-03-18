<script>
import { PolarArea, mixins } from "vue-chartjs";
const { reactiveProp } = mixins

export default {
  name: "chart",
  extends: PolarArea,
  mixins: [reactiveProp],
  props: {
    // id: { type: Number },
    chartdata: {
      type: Object,
      default: null,
    },
    options: {
      type: Object,
      default: null,
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options);
  }
}
</script>
