export interface UseCase<IRequest, IResponse> {
    invoke (request?: IRequest) : Promise<IResponse> | IResponse;
  }
