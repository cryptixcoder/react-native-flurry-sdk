/*
 * Copyright 2019, Oath Inc.
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

#import <Foundation/Foundation.h>
#import "FlurryMessaging/FlurryMessaging.h"

@protocol RNFlurryEventDispatcherDelegate <NSObject>

- (BOOL)canAcceptEvents;
- (void)sendEvent:(NSString *)event params:(NSDictionary *)params;

@end

@interface ReactNativeFlurryMessagingListener : NSObject<FlurryMessagingDelegate>

@property (weak, nonatomic) id<RNFlurryEventDispatcherDelegate> delegate;
@property (assign, nonatomic) BOOL messagingListenerEnabled;

+ (instancetype)messagingListener;
- (void)sendPendingEvents;

@end