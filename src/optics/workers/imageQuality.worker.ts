/** Browser module-worker entry. All optical inputs arrive as structured-clone data. */
import { installImageQualityWorker, type ImageQualityWorkerScope } from "./imageQualityJob.js";
installImageQualityWorker(self as unknown as ImageQualityWorkerScope);
