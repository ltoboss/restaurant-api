import './API/Config/configuration';
import 'reflect-metadata';
import { Express } from 'express';
import './API/Common/Logger';
export declare const app: any;
export declare function openPort(): Promise<Express>;
export declare const sorter: Promise<unknown>;
export default app;
