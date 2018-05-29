import { InformationSources } from './information-sources';

export class Project {
    constructor(
        public id?: number,
        public projectName?: string,
        public description?: string,
        public homePage?: string,
        public informationSource?: InformationSources
    ) {
    }
}
