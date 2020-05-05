interface ComponentDecorator {
    selector: string;
    template: string;
}

function Component(config: ComponentDecorator) {
    return function
        <T extends {new(...args: any[]): object}>
    (Constructor: T) {
        return class extends Constructor {
            constructor(...args: any[]) {
                super(...args)
                const el = document.querySelector(config.selector)!
                el.innerHTML = config.template
            }
        }
    }
}

@Component({
    selector: '#card',
    template: `
    <div class="card">
        <div class="card-content">
        <span class="card-title">Card Component</span>
    
        </div>
    </div> `
})
class CardComponent {
    constructor(public name: string) {
    }

    logName(): void {
        console.log(this.name)
    }
}
const card = new CardComponent('MyCard')
