import { createFeatureSelector, createSelector } from "@ngrx/store";
import { CustomerModel } from "../Model/Customer.model";
import { customerAdapter } from "./Customer.State";

const getassociatestate = createFeatureSelector<CustomerModel>('customer');

const customerSeletor = customerAdapter.getSelectors();

export const getcustomerlist = createSelector(getassociatestate, customerSeletor.selectAll)

const selectedentities = createSelector(getassociatestate, customerSeletor.selectEntities)

export const getcustomer = (id: number) => createSelector(selectedentities, (state) => state[id]);

export const getErrormessage = createSelector(getassociatestate, (state) => state.errormessage);