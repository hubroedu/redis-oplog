import { Items } from './collections';

if (Meteor.isServer) {
    Meteor.publishWithRedis('optimistic_ui.items', function (...args) {
        return Items.find(...args)
    });
}

Items.allow({
    insert: () => true,
    update: () => true,
    remove: () => true,
});

// Meteor.publishComposite.enableDebugLogging();

Meteor.methods({
    'optimistic_ui.items.insert'(...args) {
        return Items.insert(...args)
    },
    'optimistic_ui.items.update'(...args) {
        return Items.update(...args)
    },
    'optimistic_ui.items.remove'(...args) {
        return Items.remove(...args)
    }
});