/*
 * Copyright 2019-present Open Networking Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import {Pipe, PipeTransform} from '@angular/core';
import {ConfigLink} from './hierarchy-layout.service';

/**
 * A pipe used to filter out of the complete set of calculated links only the
 * ones useful to this layer.
 */

@Pipe({
    name: 'linkFilter',
    pure: false
})
export class LinkFilterPipe implements PipeTransform {

    transform(links: ConfigLink[], layerId: string): ConfigLink[] {
        if (links === undefined || links.length === 0) {
            return null;
        }
        const returnedLinks = Array<ConfigLink>(0);
        links.forEach((l) => {
            if (l.source.data.layerRefs.includes(layerId) && l.target.data.layerRefs.includes(layerId)) {
                returnedLinks.push(l);
            }
        });

        return returnedLinks;
    }
}
