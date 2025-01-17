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

import {ChangeValuePipe} from './change-value.pipe';
import {ChangeValueType} from './proto/github.com/onosproject/onos-config/pkg/northbound/admin/admin_pb';
import {async, TestBed} from '@angular/core/testing';

describe('ChangeValuePipe', () => {

    let pipe: ChangeValuePipe;

    // synchronous beforeEach
    beforeEach(() => {
        TestBed.configureTestingModule({
        });

        pipe = new ChangeValuePipe();
    });

    it('create an instance', () => {

        expect(pipe).toBeTruthy();
    });

    it('Empty value', () => {
        const values = pipe.transform(new Uint8Array(), ChangeValueType.EMPTY, new Array<number>());
        expect(values.length).toBe(0);
    });

});
