export const errorHandler = ( target: any, key: string, descriptor: any ) => {
    const oldFunction = descriptor.value;
    descriptor.value =  function (...args: any) {
        try{
            console.log(1);
            oldFunction.apply(this, args);
            console.log(args.next);
        }
        catch ( error ) {
            console.error(error);
        }
    }

    return descriptor;
}
